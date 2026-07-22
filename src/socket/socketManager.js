import { Server } from 'socket.io';

let io;

export const initSocket = (httpServer) => {
    io = new Server(httpServer, {
        cors: {
            origin: '*',
        },
    });

    io.on('connection', (socket) => {
        console.log(`Socket connesso: ${socket.id}`);

        socket.on('joinPost', (postId) => {
            socket.join(`post:${postId}`);
        });

        socket.on('leavePost', (postId) => {
            socket.leave(`post:${postId}`);
        });

        socket.on('joinUser', (userId) => {
            socket.join(`user:${userId}`);
        });

        socket.on('disconnect', () => {
            console.log(`Socket disconnesso: ${socket.id}`);
        });
    });

    return io;
};


export const emitToPost = (postId, event, data) => {
    if (io) {
        io.to(`post:${postId}`).emit(event, data);
    }
};

export const notifyUser = (userId, event, data) => {
    if (io) {
        io.to(`user:${userId}`).emit(event, data);
    }
};