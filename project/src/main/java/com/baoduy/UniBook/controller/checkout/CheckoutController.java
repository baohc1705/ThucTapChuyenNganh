package com.baoduy.UniBook.controller.checkout;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/checkout")
public class CheckoutController {
    @GetMapping
    public String viewCheckout() {
        return "page/checkout";
    }
}
