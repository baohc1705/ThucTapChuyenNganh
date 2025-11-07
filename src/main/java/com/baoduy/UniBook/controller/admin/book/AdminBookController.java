package com.baoduy.UniBook.controller.admin.book;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/books")
public class AdminBookController {
    @GetMapping
    public String index() {
        return "page/admin/books";
    }
}
