/*
Navicat MySQL Data Transfer

Source Server         : lau
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : group5

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-28 17:40:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` varchar(255) NOT NULL,
  `dataParam` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `little_imgUrl` varchar(255) DEFAULT NULL,
  `goodName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `soldPrice` varchar(255) DEFAULT NULL,
  `marketPrice` varchar(255) DEFAULT NULL,
  `soldNum` varchar(255) DEFAULT NULL,
  `commentNum` varchar(255) DEFAULT NULL,
  `shopName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `littleee_imgUrl` varchar(255) DEFAULT NULL,
  `littlee_imgUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('0', 'good_id:0', './images/41_05935729896473188_240.jpg', './images/41_05935729896473188_60.jpg', '型男小白鞋男鞋韩版潮流男士休闲鞋秋季学生板鞋透气潮鞋子 黑色 39', '98', '168', '80', '88', '潮男搭配师', './../images/41_05935729896473188_1280.jpg', '41_05935729896473188_360.jpg');
INSERT INTO `goodlist` VALUES ('1', 'good_id:1', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '0男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '92', '184', '99', '77', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('2', 'good_id:2', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '1男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '93', '186', '56', '25', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('3', 'good_id:3', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '2男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '100', '200', '9', '34', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('4', 'good_id:4', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '3男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '103', '206', '7', '35', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('5', 'good_id:5', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '4男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '123', '246', '6', '23', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('6', 'good_id:6', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '5男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '126', '252', '5', '12', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('7', 'good_id:7', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '6男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '128', '256', '4', '2', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('8', 'good_id:8', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '7男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '180', '360', '2', '5', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('9', 'good_id:9', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '8男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '200', '400', '3', '3', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('10', 'good_id:10', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '9男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '68', '136', '5', '12', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');
INSERT INTO `goodlist` VALUES ('11', 'good_id:11', './images/45_05923380156947849_240.jpg', './images/45_05923380156947849_60.jpg', '10男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M', '99', '188', '15', '9', '潮男搭配师', './../images/45_05923380156947849_1280.jpg', './../images/45_05923380156947849_360.jpg');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `gname` varchar(255) DEFAULT NULL,
  `salePrice` int(11) DEFAULT NULL,
  `marketPrice` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `detail_link` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('001', '2018/02/03', '../images/good1.png', 'Up Down Open Cowhide Leather Case with Crocodile...', '300', '280', '20', 'wholesale');
INSERT INTO `goodslist` VALUES ('002', '2018/01/04', '../images/good2.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '219', '189', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('003', '2018/08/13', '../images/good3.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '120', '100', '20', 'wholesale');
INSERT INTO `goodslist` VALUES ('004', '2018/04/16', '../images/good4.png', 'Up Down Open Cowhide Leather Case with Crocodile...', '160', '150', '10', 'wholesale');
INSERT INTO `goodslist` VALUES ('005', '2018/03/22', '../images/good5.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '240', '210', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('006', '2018/08/16', '../images/good6.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '230', '200', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('007', '2018/07/31', '../images/good7.png', 'Up Down Open Cowhide Leather Case with Crocodile...', '170', '150', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('008', '2018/06/25', '../images/good8.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '200', '170', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('009', '2018/06/19', '../images/good1.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '250', '200', '50', 'wholesale');
INSERT INTO `goodslist` VALUES ('010', '2018/04/21', '../images/good1.png', 'Up Down Open Cowhide Leather Case with Crocodile...', '300', '280', '20', 'wholesale');
INSERT INTO `goodslist` VALUES ('011', '2018/02/19', '../images/good2.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '219', '189', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('012', '2018/08/18', '../images/good3.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '120', '100', '20', 'wholesale');
INSERT INTO `goodslist` VALUES ('013', '2018/08/11', '../images/good4.png', 'UpDown Open Cowhide Leather Case with Crocodile...', '160', '150', '10', 'wholesale');
INSERT INTO `goodslist` VALUES ('014', '2018/08/19', '../images/good5.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '240', '210', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('015', '2018/07/15', '../images/good6.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '230', '200', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('016', '2018/04/30', '../images/good7.png', 'Up Down Open Cowhide Leather Case with Crocodile...', '170', '150', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('017', '2018/04/27', '../images/good8.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '200', '170', '30', 'wholesale');
INSERT INTO `goodslist` VALUES ('018', '2018/03/28', '../images/good1.png', 'Decent Module Case Silicone Skin Cover for iPhone 8 plus...', '219', '189', '30', 'wholesale');

-- ----------------------------
-- Table structure for userlogin
-- ----------------------------
DROP TABLE IF EXISTS `userlogin`;
CREATE TABLE `userlogin` (
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `shopCarId` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of userlogin
-- ----------------------------
INSERT INTO `userlogin` VALUES ('15816938410', 'liu123er', '1', '1');
SET FOREIGN_KEY_CHECKS=1;
