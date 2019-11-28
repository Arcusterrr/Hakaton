"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql_login = "SELECT forusers.login($1, $2)";
exports.sql_register =
  "SELECT forusers.register($1, $2, $3, $4, $5, $6, $7, $8)";
exports.sql_getuserbytoken = "SELECT forusers.get_users_by_token($1)";
exports.sql_usercheck = "SELECT forusers.usercheck($1)";
exports.sql_addcategory = "SELECT productinfo.add_category($1, $2, $3)";
exports.sql_addmaincategory = "SELECT productinfo.add_main_category($1, $2)";
exports.sql_add_product = "SELECT productinfo.add_product($1, $2, $3, $4)";
exports.sql_addsale = "SELECT productinfo.add_sale($1, $2, $3)";
exports.sql_allproducts = "SELECT * FROM products";
exports.sql_add_category_to_product =
  "SELECT productinfo.add_category_to_product($1, $2, $3)";
exports.sql_add_to_wish = "SELECT shoper.add_to_wish($1, $2)";
exports.sql_get_wish = "SELECT shoper.get_wish($1)";
