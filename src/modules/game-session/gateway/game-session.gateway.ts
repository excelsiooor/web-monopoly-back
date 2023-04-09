import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Logger } from '@nestjs/common'
import { Server, Socket } from 'socket.io'

@WebSocketGateway({
  cors: {
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  },

  withCredentials: true,
})
export class GameSessionGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server

  private logger: Logger = new Logger('ChatGateway')

  afterInit() {
    console.log('Gateway initialized')
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`)
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`)
  }

  @SubscribeMessage('join_room')
  handleJoinRoom(client: Socket, data: { room: string }) {
    client.join(data.room)
    console.log(`Client ${client.id} joined room ${data.room}`)
    this.server.to(data.room).emit('joined_room', `${client.id} joined ${data.room}`)
  }

  @SubscribeMessage('leave_room')
  handleLeaveRoom(client: Socket, data: { room: string }) {
    client.leave(data.room)
    this.logger.log(`Client ${client.id} left room ${data.room}`)
    client.emit('leftRoom', { room: data.room })
  }

  @SubscribeMessage('send_message')
  handleSendMessage(client: Socket, data: { message: string; room: string }): void {
    this.server.to(data.room).emit('new_message', `${client.id}: ${data.message}`)
  }
}
