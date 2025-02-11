DROP TABLE IF EXISTS `todos`;

CREATE TABLE todos (
    `no`	BIGINT	NOT NULL AUTO_INCREMENT PRIMARY KEY	COMMENT 'PK',
	`id`	VARCHAR(64)	NOT NULL	COMMENT 'UK',
	`name`	TEXT	NOT NULL	COMMENT '할일',
	`status`	BOOLEAN	NOT NULL	DEFAULT false	COMMENT '상태',
	`created_at`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '등록일자',
	`updated_at`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '수정일자'
)

INSERT INTO todos (id, name, status)
VALUES 
	(10, '할일1', TRUE),
	(20, '할일2', TRUE),
	(30, '할일3', FALSE),
	(40, '할일4', TRUE),
	(50, '할일5', FALSE)