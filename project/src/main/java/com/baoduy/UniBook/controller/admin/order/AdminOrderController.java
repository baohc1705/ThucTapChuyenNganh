package com.baoduy.UniBook.controller.admin.order;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/orders")
public class AdminOrderController {
    @GetMapping
    public String index() {
        return "page/admin/orders";
    }

}
