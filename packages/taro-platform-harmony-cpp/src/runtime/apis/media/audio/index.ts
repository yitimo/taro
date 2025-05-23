import audio from '@ohos.multimedia.audio'

import { temporarilyNotSupport } from '../../utils'

// 音频

export const stopVoice = /* @__PURE__ */ temporarilyNotSupport('stopVoice')
export const setInnerAudioOption = /* @__PURE__ */ temporarilyNotSupport('setInnerAudioOption')
export const playVoice = /* @__PURE__ */ temporarilyNotSupport('playVoice')
export const pauseVoice = /* @__PURE__ */ temporarilyNotSupport('pauseVoice')
export const getAvailableAudioSources = /* @__PURE__ */ temporarilyNotSupport('getAvailableAudioSources')
export const createWebAudioContext = /* @__PURE__ */ temporarilyNotSupport('createWebAudioContext')
export const createMediaAudioPlayer = /* @__PURE__ */ temporarilyNotSupport('createMediaAudioPlayer')

/**
 * 创建内部 audio 上下文 InnerAudioContext 对象。
 */
export const createInnerAudioContext = /* @__PURE__ */ temporarilyNotSupport('createInnerAudioContext')

export const createAudioContext = /* @__PURE__ */ temporarilyNotSupport('createAudioContext')

/** Harmony 专属，更新 audio 状态 */
export const refreshAudioSession = () => {
  const audioManager = audio.getAudioManager()
  const audioSessionManager = audioManager.getSessionManager()
  if (audioSessionManager) {
    audioSessionManager.deactivateAudioSession().then(() => {
      setTimeout(() => {
        const strategy = {
          concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_PAUSE_OTHERS
        }
        audioSessionManager.activateAudioSession(strategy)
      }, 100)
    })
  }
}
