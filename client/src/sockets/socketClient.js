/**
 * socketClient — Socket.IO connection singleton
 *
 * Usage:
 *   import { socketClient } from '@/sockets'
 *   socketClient.connect()
 *   socketClient.on('quiz:question', handler)
 *   socketClient.emit('quiz:answer', payload)
 *   socketClient.disconnect()
 *
 * Requires `socket.io-client` — install with: npm install socket.io-client
 */

// import { io } from 'socket.io-client'

// const SOCKET_URL = import.meta.env.VITE_SOCKET_URL ?? 'http://localhost:5000'

// let socket = null

// export const socketClient = {
//   connect(token) {
//     socket = io(SOCKET_URL, {
//       auth: { token },
//       autoConnect: true,
//     })
//     return socket
//   },
//   on(event, handler) {
//     socket?.on(event, handler)
//   },
//   off(event, handler) {
//     socket?.off(event, handler)
//   },
//   emit(event, payload) {
//     socket?.emit(event, payload)
//   },
//   disconnect() {
//     socket?.disconnect()
//     socket = null
//   },
//   get instance() {
//     return socket
//   },
// }

// Placeholder until socket.io-client is installed
export const socketClient = {}
