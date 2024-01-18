<template>
  <div>
    <IconWithText text="Cloud Computing">
      <template #icon>
        <CloudIcon width="24" />
      </template>
    </IconWithText>
    <v-list>
      <IconWithText list-item text="GCP">
        <template #icon>
          <GCPIcon width="24" />
        </template>
      </IconWithText>
      <IconWithText list-item text="AWS">
        <template #icon>
          <AWSIcon width="24" />
        </template>
      </IconWithText>
    </v-list>
  </div>
</template>

<script setup>
import CloudIcon from "@/assets/icons/cloud.svg";
import GCPIcon from "@/assets/icons/gcp.svg";
import AWSIcon from "@/assets/icons/aws.svg";
</script>
