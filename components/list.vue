<template>
    <div class="pl-4">
        <ol v-if="content.ordered === true" class="list-decimal">
            <li v-for="(item, index) in content.content" :key="index">
                <Content :content="item" />
            </li>
        </ol>
        <ul v-else class="list-disc">
            <li v-for="(item, index) in content.content" :key="index">
                <Content :content="item" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { type list } from '~/types/blog';

const props = defineProps<{ content: list }>();
const content = ref(props.content);

</script>