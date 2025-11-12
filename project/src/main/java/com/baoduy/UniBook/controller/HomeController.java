package com.baoduy.UniBook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String viewHomePage() {
        return "index";
    }
    @GetMapping("/book")
    public String viewBookDetail() {
        return "home/detail";
    }

    @GetMapping("/shop")
    public String viewShop() {
        return "home/shop";
    }

    @GetMapping("/cart")
    public String viewCart() {
        return "home/cart";
    }

    @GetMapping("/checkout")
    public String viewCheckout() {
        return "home/checkout";
    }
}
