
export const VoiceSignature = {
  founderVoiceHash: "SHA256::JIM-VOICEPRINT-KEY",
  verify(voiceInputHash) {
    return voiceInputHash === this.founderVoiceHash;
  }
};
