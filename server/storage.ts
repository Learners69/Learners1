import { users, courses, contacts, type User, type InsertUser, type Course, type InsertCourse, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  createContact(contact: InsertContact): Promise<Contact>;
}

// Use NODE_ENV for server-side code
const isStaticMode = process.env.NODE_ENV === 'production';

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private courses: Map<number, Course>;
  private contacts: Map<number, Contact>;
  private userId: number;
  private courseId: number;
  private contactId: number;

  constructor() {
    // Default initialization
    this.users = new Map();
    this.courses = new Map();
    this.contacts = new Map();
    this.userId = 1;
    this.courseId = 1;
    this.contactId = 1;

    // Add sample courses
    const sampleCourses: InsertCourse[] = [
      {
        title: "Web Development Fundamentals",
        description: "Learn the basics of web development with HTML, CSS, and JavaScript",
        instructor: "John Doe",
        duration: "8 weeks"
      },
      {
        title: "React Mastery",
        description: "Master React.js and modern frontend development",
        instructor: "Jane Smith",
        duration: "10 weeks"
      }
    ];

    sampleCourses.forEach(course => this.createCourse(course));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = this.courseId++;
    const course: Course = { ...insertCourse, id };
    this.courses.set(id, course);
    return course;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const contact: Contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();