
export const Iris = {
  async createUIComponent(name: string, options: any) {
    console.log(`[Iris] 🧩 Building component: ${name}`);
    return `<div className="component">${name} - placeholder</div>`;
  }
};
