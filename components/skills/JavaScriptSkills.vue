<template>
  <div>
    <IconWithText text="JavaScript" class="justify-center">
      <template #icon>
        <JavaScriptIcon width="24" />
      </template>
    </IconWithText>
    <div class="flex gap-2">
      <v-list>
        <IconWithText list-item text="TypeScript">
          <template #icon>
            <TypeScriptIcon width="24" />
          </template>
        </IconWithText>
        <IconWithText list-item text="Vue">
          <template #icon>
            <VueIcon width="24" />
          </template>
        </IconWithText>
        <IconWithText list-item text="React">
          <template #icon>
            <ReactIcon width="24" />
          </template>
        </IconWithText>
        <IconWithText list-item text="Angular">
          <template #icon>
            <AngularIcon width="24" />
          </template>
        </IconWithText>
        <IconWithText list-item text="NodeJS">
          <template #icon>
            <NodeJSIcon width="24" />
          </template>
        </IconWithText>
      </v-list>
      <v-list>
        <IconWithText list-item text="Vite">
          <template #icon>
            <ViteIcon width="24" />
          </template>
        </IconWithText>
        <IconWithText list-item text="Webpack">
          <template #icon>
            <WebpackIcon width="24" />
          </template>
        </IconWithText>
        <IconWithText list-item text="Rollup">
          <template #icon>
            <RollupIcon width="24" />
          </template>
        </IconWithText>
        <IconWithText list-item text="D3">
          <template #icon>
            <D3Icon width="24" />
          </template>
        </IconWithText>
        <IconWithText list-item text="Tailwind">
          <template #icon>
            <TailwindIcon width="24" />
          </template>
        </IconWithText>
      </v-list>
    </div>
  </div>
</template>

<script setup>
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import VueIcon from "@/assets/icons/vue.svg";
import ReactIcon from "@/assets/icons/react.svg";
import AngularIcon from "@/assets/icons/angular.svg";
import ViteIcon from "@/assets/icons/vite.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import NodeJSIcon from "@/assets/icons/nodejs.svg";
import D3Icon from "@/assets/icons/d3.svg";
import RollupIcon from "@/assets/icons/rollup.svg";
import WebpackIcon from "@/assets/icons/webpack.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
</script>
