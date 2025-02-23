import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Trophy, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "200+", label: "Expert Instructors" },
    { number: "1000+", label: "Course Library" },
    { number: "98%", label: "Success Rate" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "Striving for the highest standards in education",
      icon: Trophy,
    },
    {
      title: "Community",
      description: "Building strong learning communities",
      icon: Users,
    },
    {
      title: "Innovation",
      description: "Embracing new teaching methodologies",
      icon: Calendar,
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Academic Officer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Technology",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      name: "Emma Thompson",
      role: "Learning Experience Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid [mask-image:radial-gradient(white,transparent_85%)]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4" variant="secondary">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 mb-6">
              Transforming Education Through Technology
            </h1>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              We're on a mission to make high-quality education accessible to everyone,
              leveraging technology to create engaging and effective learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer
                    ${selectedValue === index ? 'bg-primary/5 border-primary' : 'hover:border-primary/50'}`}
                  onClick={() => setSelectedValue(index === selectedValue ? null : index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full bg-muted"
                      />
                      <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                    <p className="text-muted-foreground text-center">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <Button size="lg" className="group">
            Browse Courses
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
}