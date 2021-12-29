FROM duluca/minimal-nginx-web-server:l-alpine

COPY dist/wige-dev-site /var/www

CMD 'nginx'
