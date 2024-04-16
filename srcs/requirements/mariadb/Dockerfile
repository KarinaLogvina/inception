FROM debian:buster
RUN apt-get update
RUN apt-get install mariadb-server -y

EXPOSE 3306

COPY ./conf/50-server.cnf /etc/mysql/mariadb.conf.d/
COPY ./tools/init_db.sql /
RUN service mysql start && mysql < init_db.sql

CMD ["mysqld"]