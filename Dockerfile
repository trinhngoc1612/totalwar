FROM richarvey/nginx-php-fpm:1.7.3

ADD . /var/www/html/
ADD nginx.conf /etc/nginx/sites-available/default.conf
