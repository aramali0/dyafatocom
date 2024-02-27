package fsts.mrurespect.dyafatocom.entity.util;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import fsts.mrurespect.dyafatocom.entity.messagerie.Conversation;

import java.io.IOException;

public class ConversationSerializer extends JsonSerializer<Conversation> {
    @Override
    public void serialize(Conversation value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeStartObject();
        gen.writeNumberField("id", value.getId());
        // Add more fields as needed
        gen.writeEndObject();
    }
}
