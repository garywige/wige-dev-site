FROM duluca/minimal-nginx-web-server:1-alpine

COPY dist/Wige-Dev /var/www

CMD 'nginx'
