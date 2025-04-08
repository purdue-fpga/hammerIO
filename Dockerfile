FROM python:3.11-slim

# Install required packages
RUN pip install --no-cache-dir mkdocs-material

# Set working directory
WORKDIR /docs

# Expose MkDocs port
EXPOSE 8000

# Command to run MkDocs server
CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
