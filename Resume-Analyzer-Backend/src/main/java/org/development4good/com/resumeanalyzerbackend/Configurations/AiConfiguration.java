package org.development4good.com.resumeanalyzerbackend.Configurations;

import dev.ai4j.openai4j.embedding.EmbeddingModel;
import dev.langchain4j.data.document.loader.FileSystemDocumentLoader;
import dev.langchain4j.data.segment.TextSegment;
import dev.langchain4j.memory.chat.ChatMemoryProvider;
import dev.langchain4j.memory.chat.MessageWindowChatMemory;
import dev.langchain4j.model.openai.OpenAiEmbeddingModel;
import dev.langchain4j.rag.content.retriever.ContentRetriever;
import dev.langchain4j.rag.content.retriever.EmbeddingStoreContentRetriever;
import dev.langchain4j.store.embedding.EmbeddingStore;
import dev.langchain4j.store.embedding.EmbeddingStoreIngestor;
import dev.langchain4j.store.embedding.inmemory.InMemoryEmbeddingStore;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static org.reflections.Reflections.log;
@Slf4j
@Configuration
public class AiConfiguration {

    /*
    * This defines the location of the resume stored.
    * */
    @Value("${ai.resume.location}")
    private String resumeLocation;

    /*
    * Bean of the ChatMemoryProvider is created to create a new instance of ChatMemory every time for a new user with unique ID.*/
    @Bean
    ChatMemoryProvider chatMemoryProvider() {
        return memoryId -> MessageWindowChatMemory.withMaxMessages(20);
    }

    /*
    * Bean of the EmbeddingStore that stores the */
    @Bean
    EmbeddingStore<TextSegment> embeddingStore() {
        return new InMemoryEmbeddingStore<>();
    }


    /*
    * Application runner is an interface and used to define that a bean should run when it's contained
    *  in the Spring Application Context even though it's not called or used anywhere but the process
    *  defined inside it should run no matter what. */
    @Bean
    ApplicationRunner docImporter(EmbeddingStore<TextSegment> embeddingStore) {
        return args -> {
            if (resumeLocation == null || resumeLocation.isEmpty()) {
                log.error("No document location specified, configure 'resume.location' in application.properties");
                return;
            }
            log.info("Importing documents from {}", resumeLocation);
            var docs = FileSystemDocumentLoader.loadDocuments(resumeLocation);
            EmbeddingStoreIngestor.ingest(docs, embeddingStore);
            log.info("Imported {} documents", docs.size());
        };
    }

    @Bean
    ContentRetriever contentRetriever(EmbeddingStore<TextSegment> embeddingStore) {
        return EmbeddingStoreContentRetriever.from(embeddingStore);
    }
}
