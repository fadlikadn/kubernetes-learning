FROM node6.14.2
EXPOSE 8082
copy server.js .
CMD node server.js