FROM alpine:3.17

# Install necessary packages
RUN apk update
RUN apk add --no-cache \
  chromium="109.0.5414.74-r0" \
  ffmpeg="5.1.2-r1" \
  nodejs-current="19.3.0-r0" \
  npm="9.1.2-r0"

# Add a user so Chrome can use the sandbox.
RUN addgroup -S remotion && adduser -S -g remotion remotion
RUN mkdir -p /out /node_modules
RUN chown -R remotion:remotion /node_modules /out

# Copy everything from your project to the docker image. Adjust if needed.
COPY package.json package*.json yarn.lock* pnpm-lock.yaml* tsconfig.json* remotion.config.* ./
COPY src ./src

# Install the right package manager and dependencies - see below for Yarn/PNPM
RUN corepack enable
RUN yarn

# Run everything after as non-privileged user.
USER remotion

# Run your application
COPY render.mjs render.mjs
CMD ["node", "render.mjs"]