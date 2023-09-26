<script setup lang="ts">
import { PCFSoftShadowMap, SRGBColorSpace, ACESFilmicToneMapping } from "three";

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

const { onLoop } = useRenderLoop();
onLoop(() => {
  console.log("lol");
});
</script>

<template>
  <TresCanvas
    clear-color="#E0D6BE"
    window-size
    ref="renderer"
    v-bind="gl"
    :antialias="true"
  >
    <TresPerspectiveCamera
      :position="[-8, 7, 25]"
      :fov="70"
      :aspect="1"
      :near="0.1"
      :far="100"
    />
    <OrbitControls
      :enablePan="false"
      :minDistance="17"
      :maxDistance="80"
      :maxPolarAngle="Math.PI / 2"
    />
    <Suspense>
      <Lantern />
    </Suspense>
  </TresCanvas>
</template>
