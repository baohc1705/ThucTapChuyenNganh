package com.baoduy.UniBook.controller.admin.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/users")
public class AdminUserController {

    @GetMapping
    public String index() {
        return "page/admin/users";
    }

    @GetMapping("/roles")
    public String viewRoles() {
        return "page/admin/roles";
    }
}
