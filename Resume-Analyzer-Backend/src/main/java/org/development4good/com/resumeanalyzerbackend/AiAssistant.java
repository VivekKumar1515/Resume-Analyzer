package org.development4good.com.resumeanalyzerbackend;

import dev.langchain4j.model.output.structured.Description;
import dev.langchain4j.service.MemoryId;
import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import dev.langchain4j.service.spring.AiService;

@AiService
public interface AiAssistant {
    class Country {

        String capital;

        @Override
        public String toString() {
            return "country{" +
                    "capital='" + capital + '\'' +
                    '}';
        }
    }
    @SystemMessage("Strictly answer in 1 word. If the country is invalid or does not have a capital or if the country mentioned is not a country, just return 'not a country' one word only. Do not mention any reason")
    Country chat(@MemoryId String memoryId, @UserMessage String message);
}
