# Start with a base image that has JDK 21. If JDK 21 is not available, you might need to use a JDK 17 image.
# For this example, we'll start with JDK 17 as a placeholder.
FROM openjdk:21 as build

# Create app directory in container
WORKDIR /app

# Copy maven executable to the image
COPY mvnw .
COPY .mvn .mvn

# Copy the pom.xml and source code
COPY pom.xml .
COPY src src

# Package the application
RUN ./mvnw package -DskipTests

# Start with a clean base image to run the application
FROM openjdk:21

# Copy the jar from the build stage to the new container image
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080 for web access
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
