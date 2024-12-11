<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <aside class="w-64 bg-gray-800 text-gray-100 shadow-md h-screen">
        <nav class="p-4">
            <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
            <ul>
                <li>
                    <RouterLink to="/" class="block py-2 px-4 rounded hover:bg-gray-600"
                        active-class="bg-gray-600 font-semibold">
                        Display
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/edit" class="block py-2 px-4 rounded hover:bg-gray-600"
                        active-class="bg-gray-600 font-semibold">
                        Edit
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>