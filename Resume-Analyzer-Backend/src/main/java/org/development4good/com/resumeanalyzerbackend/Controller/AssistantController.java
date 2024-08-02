package org.development4good.com.resumeanalyzerbackend.Controller;

import org.development4good.com.resumeanalyzerbackend.AiAssistant;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class AssistantController {
    AiAssistant assistant;

    public AssistantController(AiAssistant assistant) {
        this.assistant = assistant;
    }

    @RequestMapping(value = "/assistant", method = RequestMethod.GET)
    public String assistant(@RequestParam(value = "country", defaultValue = "Scotland") String country) {
        AiAssistant.Country capital = assistant.chat(UUID.randomUUID().toString(), "What is the capital of " + country + "?");
        return capital.toString();


    }
}
