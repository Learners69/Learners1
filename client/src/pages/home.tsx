import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Course } from "@shared/schema";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

export default function Home() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center py-20">
          <Card className="w-full max-w-[90rem] mx-auto bg-black/[0.96] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
            />

            <div className="flex min-h-[600px] md:min-h-[700px]">
              <div className="flex-1 p-12 md:p-16 relative z-10 flex flex-col justify-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Learn and grow with{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Learners
                  </span>
                </h1>
                <p className="mt-6 text-neutral-300 max-w-lg text-lg md:text-xl">
                  Discover new skills, expand your knowledge, and achieve your goals with our comprehensive learning platform.
                </p>
                <Button size="lg" className="mt-8 w-fit text-lg px-8 py-6">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full absolute inset-0"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Features Section */}
        <section className="container py-20 bg-background">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Learners?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make our platform the perfect choice for your learning journey.
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </section>

        {/* Courses Section */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Featured Courses
            </h2>
          </div>

          {isLoading ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-7 w-1/2 bg-muted rounded"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {courses?.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{course.description}</p>
                    <div className="mt-4 flex justify-between text-sm">
                      <span>Instructor: {course.instructor}</span>
                      <span>Duration: {course.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}