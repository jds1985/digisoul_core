export abstract class AgentBase {
  abstract name: string;
  abstract role: string;

  activate() {
    console.log(`[Agent] ${this.name} activated.`);
  }
}
