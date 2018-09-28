# run unit tests first against the same base image
FROM node:alpine
WORKDIR /app
ADD . .
RUN \
    node --version \
    npm install && \
    node_modules/typescript/bin/tsc && \
    npm run-script test

# compile image intended for production use
FROM node:alpine
WORKDIR /app
ADD . .
RUN npm install --production && \
    node_modules/typescript/bin/tsc

# Report to docker the health status so we can possibly use that information
# For now mark unhealthy after 25 sec (interval*retries)
# We could use this information in a watchtower kind of way to restart in addition to upgrade
HEALTHCHECK --interval=5s --timeout=10s --start-period=10s --retries=5 CMD node dist/healthcheck.js || exit 1

# Run the startup script which spawns the agent and acts as a intermediary between it
# and docker to signal the containers health
ENTRYPOINT ["npm", "start"]

