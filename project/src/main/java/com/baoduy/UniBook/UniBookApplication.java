package com.baoduy.UniBook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UniBookApplication {

	public static void main(String[] args) {
        SpringApplication.run(UniBookApplication.class, args);
        System.out.println("===========================================");
        System.out.println("Ứng dụng đã khởi động thành công!");
        System.out.println("Đường dẫn: http://localhost:8080/");
        System.out.println("===========================================");
    }
}
