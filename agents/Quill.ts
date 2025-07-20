
export const Quill = {
  async generate(prompt: string) {
    console.log(`[Quill] 📝 Generating text for: "${prompt}"`);
    return `Here is your generated text based on: "${prompt}"`;
  }
};
