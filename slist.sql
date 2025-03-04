/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : wechat

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 29/12/2022 12:18:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for slist
-- ----------------------------
DROP TABLE IF EXISTS `slist`;
CREATE TABLE `slist`  (
  `id` int(0) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  INDEX `id`(`id`) USING BTREE,
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of slist
-- ----------------------------
INSERT INTO `slist` VALUES (1, '老君山', '2022-12-28');
INSERT INTO `slist` VALUES (2, '龙门石窟', '2022-12-06');
INSERT INTO `slist` VALUES (1, '青海', '2022-12-02');
INSERT INTO `slist` VALUES (3, '青海', '2022-11-28');
INSERT INTO `slist` VALUES (4, '洛阳', '2022-11-23');
INSERT INTO `slist` VALUES (3, '鹤壁', '2022-12-14');
INSERT INTO `slist` VALUES (2, '锦州', '2022-12-24');
INSERT INTO `slist` VALUES (1, 'M78', '2022-12-03');
INSERT INTO `slist` VALUES (2, 'M87', '2022-12-07');
INSERT INTO `slist` VALUES (1, '蒙德', '2022-11-14');
INSERT INTO `slist` VALUES (3, '离月', '2022-10-11');
INSERT INTO `slist` VALUES (4, '稻妻', '2022-12-13');
INSERT INTO `slist` VALUES (4, '香港', '2023-01-13');
INSERT INTO `slist` VALUES (3, '上海', '2022-11-02');
INSERT INTO `slist` VALUES (1, '须弥', '2022-12-28');
INSERT INTO `slist` VALUES (2, '天津', '2022-09-12');
INSERT INTO `slist` VALUES (3, '重庆', '2022-09-26');

SET FOREIGN_KEY_CHECKS = 1;
