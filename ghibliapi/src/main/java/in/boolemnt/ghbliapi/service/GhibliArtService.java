package in.boolemnt.ghbliapi.service;

import in.boolemnt.ghbliapi.client.StabilityAIClient;
import in.boolemnt.ghbliapi.dto.TextToImageRequest;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Service
public class GhibliArtService {

    private final StabilityAIClient stabilityAIClient;
    private final String apiKey;

    public GhibliArtService(StabilityAIClient stabilityAIClient, @Value("${stability.api.key}") String apiKey) {
        this.stabilityAIClient = stabilityAIClient;
        this.apiKey = apiKey;
    }

    public byte[] createGhibliArt(MultipartFile image, String prompt) {
        String finalPrompt = prompt + ", in the beautiful, detailed anime style of studio ghibli.";
        String engineId = "stable-diffusion-v1-6";
        String stylePreset = "anime";

        try {
            // Resize uploaded image to fit within 1024x1024 pixels (to meet API requirements)
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            Thumbnails.of(image.getInputStream())
                    .size(1024, 1024)
                    .outputFormat("png")
                    .toOutputStream(outputStream);

            MultipartFile resizedImage = new MockMultipartFile(
                    "init_image", "resized.png", "image/png", outputStream.toByteArray()
            );

            return stabilityAIClient.generateImageFromImage(
                    "Bearer " + apiKey,
                    engineId,
                    resizedImage,
                    finalPrompt,
                    stylePreset
            );

        } catch (IOException e) {
            throw new RuntimeException("Failed to resize image before generation", e);
        }
    }

    public byte[] createGhibliArtFromText(String prompt, String style) {
        String finalPrompt = prompt + ", in the beautiful, detailed anime style of studio.";
        String engineId = "stable-diffusion-v1-6";
        String stylePreset = style.equals("general") ? "anime" : style;

        TextToImageRequest requestPayload = new TextToImageRequest(finalPrompt, stylePreset);

        return stabilityAIClient.generateImageFromText(
                "Bearer " + apiKey,
                engineId,
                requestPayload
        );
    }
}
