import { sql } from "drizzle-orm";
import { pgTable, text, varchar, json, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const flashcards = pgTable("flashcards", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  subject: varchar("subject", { length: 50 }).notNull(),
  question: text("question").notNull(),
  hints: json("hints").$type<string[]>().notNull(),
  answer: text("answer").notNull(),
  explanation: text("explanation").notNull(),
  difficulty: varchar("difficulty", { length: 20 }).notNull().default("grade8"),
  order: integer("order").notNull().default(0),
});

export const insertFlashcardSchema = createInsertSchema(flashcards).omit({
  id: true,
});

export type InsertFlashcard = z.infer<typeof insertFlashcardSchema>;
export type Flashcard = typeof flashcards.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
