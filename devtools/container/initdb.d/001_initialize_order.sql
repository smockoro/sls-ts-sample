DROP SCHEMA IF EXISTS `order`;
CREATE SCHEMA `order` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

USE `order`;

DROP TABLE IF EXISTS `orders`;

CREATE TABLE orders (
    id      int(11)      NOT NULL AUTO_INCREMENT,
    user_id int(11)      NOT NULL,
    status  varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


DROP TABLE IF EXISTS `order_items`;

create table order_items (
    id         int(11) NOT NULL AUTO_INCREMENT,
    order_id   int(11) NOT NULL,
    product_id int(11) NOT NULL,
    quantity   int(11) NOT NULL,
  PRIMARY KEY (id, order_id, product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO orders (user_id, status) VALUES (1, 'ordered');
INSERT INTO orders (user_id, status) VALUES (2, 'completed');
INSERT INTO orders (user_id, status) VALUES (3, 'completed');
INSERT INTO orders (user_id, status) VALUES (4, 'completed');
INSERT INTO orders (user_id, status) VALUES (5, 'ordered');
