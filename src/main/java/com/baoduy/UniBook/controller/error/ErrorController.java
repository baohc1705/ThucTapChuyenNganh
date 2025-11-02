package com.baoduy.UniBook.controller.error;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/errors")
public class ErrorController {
    @GetMapping("/404")
    public String viewNotFoundPage() {
        return "error/404";
    }

    @GetMapping("/403")
    public String viewDeniedPage() {
        return "error/403";
    }

    @GetMapping("/500")
    public String viewServerErrorPage() {
        return "error/500";
    }
}
