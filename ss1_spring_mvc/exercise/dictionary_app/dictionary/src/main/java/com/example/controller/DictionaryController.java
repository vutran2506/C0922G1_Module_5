package com.example.controller;

import com.example.service.IDictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DictionaryController {
    @Autowired
    IDictionaryService dictionaryService;
    @GetMapping("")
    public String showHome(){
        return "dictionary";
    }
    @PostMapping("/translate")
    public  String translate(@RequestParam String vocabulary, Model model){
        model.addAttribute("vietnamese" ,dictionaryService.Search(vocabulary));
        return "dictionary";
    }
}
