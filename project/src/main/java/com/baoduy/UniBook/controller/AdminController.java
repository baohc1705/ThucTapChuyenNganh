package com.baoduy.UniBook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {
    @GetMapping("/admin")
    public String index() {
        return "admin";
    }

    @GetMapping("/admin/books")
    public String viewBooks() {
        return "admin/books";
    }

    @GetMapping("/admin/orders")
    public String viewOrders() {
        return "admin/orders";
    }

    @GetMapping("/admin/users")
    public String viewUsers() {
        return "admin/users";
    }

    @GetMapping("/admin/roles")
    public String viewRoles() {
        return "admin/roles";
    }

    @GetMapping("/admin/warehouse")
    public String viewWarehouse() {
        return "admin/warehouse";
    }
}
