import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all flashcards
  app.get("/api/flashcards", async (req, res) => {
    try {
      const flashcards = await storage.getAllFlashcards();
      res.json(flashcards);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch flashcards" });
    }
  });

  // Get flashcards by subject
  app.get("/api/flashcards/subject/:subject", async (req, res) => {
    try {
      const { subject } = req.params;
      const flashcards = await storage.getFlashcardsBySubject(subject);
      res.json(flashcards);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch flashcards by subject" });
    }
  });

  // Get single flashcard
  app.get("/api/flashcards/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const flashcard = await storage.getFlashcard(id);
      if (!flashcard) {
        return res.status(404).json({ message: "Flashcard not found" });
      }
      res.json(flashcard);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch flashcard" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
