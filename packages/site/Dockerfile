FROM node:16.3-alpine as builder

ARG API_URL=API_URL

ENV NODE_ENV production

COPY packages/site/package.json packages/site/package.json
COPY package.json .
COPY yarn.lock .

RUN yarn --frozen-lockfile

COPY packages/site packages/site
COPY tsconfig.json .

RUN cd /packages/site && \
    yarn build && \
    mkdir /site && \
    mv /node_modules /site && \
    cp -R /packages/site/node_modules/* /site/node_modules && \
    mv /packages/site/.next /site && \
    mv /packages/site/package.json /site && \
    mv /packages/site/public /site && \
    mv /packages/site/next.config.js /site

FROM node:16.3-alpine

WORKDIR /site

COPY --from=builder /site /site

CMD yarn start
