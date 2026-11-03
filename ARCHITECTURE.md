# Architecture

## 1. Overview

The Live Quiz Platform is a web application designed to support interactive quizzes, real-time classroom participation, and AI-assisted assessment.

The application follows a client-server architecture using the MERN stack, with real-time communication for live quiz interactions where required.

This document describes the intended architectural organization and design principles. Update it as the implementation evolves. Features described as planned should not be considered implemented until they exist in the codebase.

## 2. Architectural Goals

The architecture should support:

- Clear separation of frontend, backend, and data access responsibilities.
- Reliable live quiz sessions with multiple participants.
- Consistent scoring and leaderboard calculations.
- Secure authentication and authorization.
- Testable business logic.
- Maintainable APIs and database access.
- AI integrations that can be tested, monitored, and replaced independently.
- Safe deployment and incremental releases.

## 3. Technology Stack

| Layer | Technology | Responsibility |
|---|---|---|
| Frontend | React | User interface and user interactions |
| Styling | Tailwind CSS v4 | Utility-first styling with CSS-first `@theme` design tokens |
| Backend runtime | Node.js | Execute backend application logic |
| HTTP server | Express.js | API routing and middleware |
| Database | MongoDB | Persist application data |
| Real-time communication | Socket.IO or WebSockets | Deliver live events |
| AI integration | Configured AI provider | Question generation and assisted evaluation |
| Version control | Git and GitHub | Collaboration, code review, and change history |


Use the actual dependencies and services configured in the repository as the source of truth.

## 4. High-Level Architecture

    +------------------------------+
    |       User Interfaces        |
    |                              |
    | Instructor UI | Student UI   |
    +---------------+--------------+
                    |
                    v
    +------------------------------+
    |       React Frontend         |
    |                              |
    | Components, Pages, State     |
    | HTTP Client, Socket Client   |
    +---------------+--------------+
                    |
             HTTP / HTTPS
                    |
          +---------+----------+
          |                    |
          v                    v
    +-------------+    +----------------+
    | Express API |    | Real-time      |
    |             |    | Event Handler  |
    +------+------+    +--------+-------+
           |                    |
           +---------+----------+
                     |
                     v
          +----------------------+
          | Application Services |
          |                      |
          | Quiz, Session, Score |
          | User, Assessment     |
          +----------+-----------+
                     |
             +-------+--------+
             |                |
             v                v
       +-----------+    +--------------+
       | MongoDB   |    | AI Provider  |
       |           |    | Integration  |
       +-----------+    +--------------+

The diagram represents logical responsibilities. The implementation may combine some of these components into the same process or modules.

## 5. Frontend Architecture

The frontend is responsible for rendering the application and collecting user interactions.

Its responsibilities include:

- Displaying instructor and student interfaces.
- Managing local UI state.
- Sending HTTP requests to the backend.
- Receiving and displaying real-time events.
- Displaying quiz questions, timers, answers, results, and leaderboards.
- Showing loading, error, and connection states.

The frontend must not be the authority for sensitive operations such as calculating official scores, determining permissions, or deciding whether a quiz session is open.

### Implemented organization

    client/
    └── src/
        ├── ui/
        │   ├── shared/          ← small reusable primitives (Button, Input, Badge, Spinner)
        │   │   └── index.js     (barrel export)
        │   └── components/      ← composed feature-level components (Navbar, Modal, Sidebar …)
        │       └── index.js     (barrel export)
        │
        ├── pages/               ← page-level views (one file per route)
        │   └── index.js
        │
        ├── hooks/               ← custom React hooks (useLocalStorage, …)
        │   └── index.js
        │
        ├── services/            ← HTTP API clients and domain service functions
        │   ├── http.js          (fetch wrapper with auth token injection)
        │   └── index.js
        │
        ├── sockets/             ← Socket.IO connection singleton and event helpers
        │   ├── socketClient.js
        │   └── index.js
        │
        ├── state/               ← global application state (Zustand / Redux Toolkit / Jotai)
        │   └── index.js
        │
        ├── utils/               ← pure helper functions (cn, formatDate, capitalize, …)
        │   └── index.js
        │
        ├── assets/              ← static images, SVGs, and fonts
        ├── index.css            ← Tailwind entry point + global base styles
        ├── App.jsx
        └── main.jsx

#### Path alias

All imports inside `src/` use the `@/` alias (configured in `vite.config.js`):

```js
import { Button, Input } from '@/ui/shared'
import { http }          from '@/services'
import { useLocalStorage } from '@/hooks'
```

This avoids fragile relative paths and makes refactoring directories trivial.

#### `ui/shared` vs `ui/components`

| Folder | Purpose | Examples |
|---|---|---|
| `ui/shared/` | Atomic primitives — no business logic | `Button`, `Input`, `Badge`, `Spinner` |
| `ui/components/` | Composed feature components | `Navbar`, `Modal`, `QuizCard`, `Sidebar` |

Shared primitives should accept `variant`, `size`, and `className` props and delegate all layout concerns to the parent.

Responsibilities:

- `ui/shared/`: Reusable UI primitives.
- `ui/components/`: Larger, composed components that may consume shared primitives.
- `pages/`: Page-level views mounted by the router.
- `hooks/`: Reusable React hooks.
- `services/`: HTTP API client and frontend service functions.
- `sockets/`: Real-time connection and event handling.
- `state/`: Shared application state.
- `utils/`: Small reusable pure utilities.

Do not create every directory in advance if the application does not need it yet.

## 5b. Styling

The project uses **Tailwind CSS v4** with its CSS-first configuration approach — there is no `tailwind.config.js` file.

### Setup

Tailwind is processed by the `@tailwindcss/vite` Vite plugin registered in `vite.config.js`. The entry point is `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-accent: #aa3bff;
  --font-sans:    system-ui, 'Segoe UI', Roboto, sans-serif;
  /* … */
}
```

### Design tokens via `@theme`

All design tokens (colours, fonts, shadows) are declared as CSS custom properties inside `@theme {}`. Tailwind automatically generates utility classes from them:

| Token | Generated utility class |
|---|---|
| `--color-accent` | `text-accent`, `bg-accent`, `border-accent` |
| `--color-bg` | `bg-bg` |
| `--color-text-h` | `text-text-h` |
| `--font-mono` | `font-mono` |
| `--shadow-card` | `shadow-card` |

### Dark mode

Dark-mode token overrides live inside `@media (prefers-color-scheme: dark) { @theme { … } }` in `index.css`. No extra configuration is needed.

### Using Tailwind in components

Use Tailwind utility classes directly in JSX. Combine with the `cn()` helper from `@/utils` when conditional classes are needed:

```jsx
import { cn } from '@/utils'

function Card({ isActive, className }) {
  return (
    <div className={cn('rounded-lg p-4 bg-bg shadow-card', isActive && 'border border-accent', className)}>
      …
    </div>
  )
}
```

### Shared primitive styling

Shared primitives in `ui/shared/` declare their own variant classes as string maps and let parents control layout via `className` passthrough:

```jsx
// Button.jsx
const variantClasses = {
  primary: 'bg-accent text-white hover:opacity-90',
  ghost:   'bg-transparent border border-border',
}
```


## 6. Backend Architecture

The backend owns application rules, data validation, authorization, persistence, and authoritative quiz state.

A suggested logical request flow is:

    HTTP Request
        |
        v
    Route
        |
        v
    Authentication / Validation
        |
        v
    Controller
        |
        v
    Service
        |
        v
    Data Access Layer
        |
        v
    MongoDB

The exact implementation may differ, but responsibilities should remain clear.

### Routes

Define API paths and connect them to the appropriate middleware and controllers.

### Middleware

Handle cross-cutting concerns such as authentication, authorization, request validation, and error handling.

### Controllers

Translate HTTP requests into application-service calls and return appropriate responses.

### Services

Contain business rules such as quiz lifecycle transitions, answer evaluation, and score calculation.

### Data access

Encapsulate database queries and persistence operations where appropriate.

### Suggested organization

    server/
    └── src/
        ├── routes/
        ├── controllers/
        ├── services/
        ├── models/
        ├── middleware/
        ├── validators/
        ├── sockets/
        ├── integrations/
        ├── utils/
        └── app.js

This is a suggested organization, not a requirement to split every feature into all these layers.

## 7. Core Domain Concepts

The application may contain the following domain concepts. Their actual fields and relationships must be defined by the implementation and database requirements.

### User

Represents a person using the platform, such as an instructor or student.

Possible responsibilities:

- Authentication identity
- Role and permissions
- Profile information

### Quiz

Represents a collection of questions and quiz-level configuration.

Possible responsibilities:

- Quiz metadata
- Questions or references to questions
- Timing and scoring configuration
- Ownership and access rules

### Quiz Session

Represents a particular live or scheduled occurrence of a quiz.

A quiz definition and a quiz session should be treated as different concepts when the same quiz can be conducted multiple times.

Possible responsibilities:

- Session status
- Start and end times
- Participant membership
- Current question and timing state

### Submission

Represents a participant's answer to a question or assessment.

Possible responsibilities:

- Participant and question references
- Submitted answer
- Submission timestamp
- Evaluation status
- Awarded score

### Result or Leaderboard Entry

Represents calculated performance for a participant in a session.

The design should specify whether leaderboard values are computed on demand, cached, or maintained incrementally.

Avoid maintaining multiple independently editable sources of truth for the same score.

## 8. Live Quiz Lifecycle

The exact lifecycle should be defined by the product requirements. A possible starting model is:

    CREATED
       |
       v
    SCHEDULED (optional)
       |
       v
    LOBBY
       |
       v
    IN_PROGRESS
       |
       v
    COMPLETED

Additional states, such as `CANCELLED`, may be introduced when needed.

The backend must validate state transitions. A client must not be allowed to start a quiz, change the current question, or reopen a completed session simply by emitting an event.

For timed questions, define how the server determines the authoritative start and end times. Client-side timers are for display and should not determine whether a late submission is accepted.

## 9. Real-Time Communication

Socket.IO or another WebSocket-based solution may be used for real-time interactions.

Potential event categories include:

- Joining or leaving a quiz session
- Participant presence updates
- Question publication
- Answer submission acknowledgement
- Timer and session-state updates
- Leaderboard updates
- Session completion notifications

These are illustrative event categories, not a final event contract.

### Event design principles

- Authenticate connections where required.
- Authorize access to every session and event.
- Validate incoming payloads.
- Use consistent event naming and payload structures.
- Handle disconnections and reconnections.
- Avoid broadcasting sensitive information to unauthorized users.
- Handle duplicate or repeated events safely.
- Keep official scores and session state on the server.

### Answer submission flow

A typical flow is:

1. A student submits an answer.
2. The server verifies the participant, session, question, and submission deadline.
3. The server validates the answer payload and checks the submission policy.
4. The backend persists the submission according to the application's rules.
5. The scoring service calculates the score for automatically graded questions.
6. The server updates or recalculates the leaderboard as required.
7. Authorized clients receive the relevant acknowledgement and leaderboard update.

The implementation must define how repeated submissions, retries, concurrent submissions, and duplicate events are handled.

## 10. Scoring and Leaderboard

Scoring rules should be explicit, deterministic where possible, and covered by automated tests.

The architecture should specify:

- How correct answers are determined.
- How points are awarded.
- Whether response time affects scores.
- How ties are handled.
- Whether and when answers can be changed.
- When scores become final.
- How leaderboard updates are calculated and distributed.

The backend must be the authority for score calculations. The frontend may sort or animate received leaderboard data for presentation, but it must not be trusted to establish official scores.

For larger sessions, evaluate whether incremental score updates, caching, or more efficient broadcasting is necessary. Introduce these optimizations based on measured needs.

## 11. AI Integration

AI features should be accessed through backend-controlled integrations rather than exposing provider credentials in the browser.

Potential use cases include:

- Generating quiz questions from supplied learning material.
- Suggesting answer explanations.
- Evaluating subjective answers against instructor-defined criteria.
- Producing feedback for instructors and learners.

### AI-assisted evaluation flow

A possible flow is:

1. A submission is stored.
2. The backend prepares the answer, rubric, and relevant reference material.
3. The AI integration sends an authorized request to the configured provider.
4. The response is validated and converted into the application's evaluation format.
5. The evaluation result and relevant metadata are stored.
6. The instructor can review or override the proposed evaluation, according to the product policy.

AI evaluations may be incorrect or inconsistent. They should not automatically be treated as authoritative for high-impact decisions without appropriate validation and review.

The integration should handle timeouts, rate limits, provider errors, malformed responses, and retries. It should also minimize personal data sent to external providers and follow applicable privacy requirements.

## 12. API Design

The backend exposes HTTP APIs for operations such as authentication, quiz management, participation, and result retrieval.

The exact routes should be documented in API documentation as the implementation stabilizes.

API design principles:

- Use consistent resource naming.
- Validate request payloads.
- Return appropriate HTTP status codes.
- Use consistent error response structures.
- Enforce authorization on protected operations.
- Avoid exposing internal implementation details in error responses.
- Version APIs if breaking changes eventually require it.

For each endpoint, document its method, path, authorization requirements, request schema, response schema, and possible errors.

## 13. Data Integrity and Security

Security must be enforced on the backend.

Important requirements include:

- Never commit secrets or production credentials.
- Enforce role-based access and resource ownership.
- Validate user input on the server.
- Prevent unauthorized quiz participation and session manipulation.
- Apply appropriate rate limits to sensitive endpoints.
- Protect authentication credentials and session tokens.
- Avoid logging passwords, tokens, or unnecessary personal information.
- Apply database access controls and use secure connection settings.
- Validate AI provider responses before using them.
- Use safe defaults for CORS, cookies, and authentication configuration.

Any production use involving student information must follow the institution's applicable privacy and security requirements.

## 14. Testing Strategy

Testing should be added at the appropriate level for each feature.

### Unit tests

Test isolated functions and business rules, including scoring, validation, and session transitions.

### Integration tests

Test API handlers, service interactions, database operations, and authorization.

### Real-time tests

Test event validation, multiple participants, duplicate submissions, disconnections, and leaderboard consistency.

### Frontend tests

Test important UI behavior, error states, and interactions with mocked APIs or real-time events.

### End-to-end tests

As the application matures, test critical flows such as creating a quiz, starting a session, submitting answers, and viewing results.

Automated checks should run in CI before a contribution is merged, once the workflows are configured.

## 15. Deployment and Environments

Keep development, testing, staging, and production environments separate where practical.

- **Development:** Used by contributors to build and debug features.
- **Testing/CI:** Used to run automated checks.
- **Staging:** Used to validate integrated changes before production.
- **Production:** Used by the institute and real users.

Contributions should be tested before they reach production. Only authorized maintainers should control production releases and credentials.

Deployment-specific details, infrastructure diagrams, and environment setup instructions should be documented separately when needed.

## 16. Architecture Decision Records

Record significant technical decisions when they affect the design or future development of the project.

Examples include:

- Why Socket.IO was selected for real-time communication.
- How quiz sessions and repeated attempts are modeled.
- How leaderboard updates are calculated.
- How subjective answers are evaluated.
- How authentication and authorization are implemented.

A decision record should explain the context, the decision, alternatives considered, and important consequences.

A suitable location is:

    docs/
    └── decisions/
        ├── 0001-realtime-communication.md
        └── 0002-quiz-session-model.md

Only add records for decisions that are meaningful enough to help future contributors understand the architecture.

## 17. Keeping This Document Updated

This document should evolve with the codebase.

Contributors should update it when a change materially affects:

- Component responsibilities
- Data models or relationships
- API contracts
- Real-time event contracts
- Security boundaries
- Scoring behavior
- AI integration
- Deployment architecture

Do not document planned behavior as if it already exists. Keep examples, diagrams, and implementation details consistent with the current code.