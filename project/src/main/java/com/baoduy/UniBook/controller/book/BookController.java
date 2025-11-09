package com.baoduy.UniBook.controller.book;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/books")
public class BookController {
    @GetMapping("/book")
    public String viewBookDetail() {
        return "page/detail";
    }

    @GetMapping("/shop")
    public String viewShop() {
        return "page/shop";
    }
}
