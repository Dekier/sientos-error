<script setup lang="ts">
import { PCFSoftShadowMap, SRGBColorSpace, ACESFilmicToneMapping } from "three";

const title = ref("Marcin Dekier");
const description = ref("Marcin Dekier Sandbox (Portfolio)");
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
const characterStore = useCharacterStore();
const { positionCharacter } = storeToRefs(characterStore);

const { isMobile } = useDevice();
const gl = {
  alfa: false,
  shadows: true,
  physicallyCorrectLights: true,
  gammaFactor: 2.2,
  outputColorSpace: SRGBColorSpace,
  toneMapping: ACESFilmicToneMapping,
  toneMappingExposure: 2.4,
  shadowMap: { enabled: true, type: PCFSoftShadowMap },
  powerPreference: "high-performance",
};

const isActiveAntialias = ref(false);
isActiveAntialias.value = isMobile ? false : true;
</script>

<template>
  <HudGeneral />
  <LoadingScreen />
  <client-only>
    <Joystick v-if="isMobile" />
    <Suspense>
      <ControllerGamepad v-if="positionCharacter" />
    </Suspense>
  </client-only>
  <TresCanvas
    clear-color="#DBC295"
    window-size
    v-bind="gl"
    :antialias="isActiveAntialias"
  >
    <Camera />
    <Light />
    <Suspense>
      <ModelsCharacterAll />
    </Suspense>
    <Suspense>
      <ModelsToolBox v-if="positionCharacter" />
    </Suspense>
  </TresCanvas>
</template>
