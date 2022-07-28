<script>
    import FileManager from "../components/filemanager/filemanager.svelte";
    import FileManagerBookmarks from "../components/filemanager/filemanagerbookmarks.svelte";
    import Bookmark from "../components/filemanager/bookmark.svelte";
    let current = 1;
    let datas = [
        {
            id: 1,
            icon: "house",
            label: "Home",
        },
        {
            id: 2,
            icon: "description",
            label: "Documents",
        },
        {
            id: 3,
            icon: "image",
            label: "Pictures",
        },
        {
            id: 4,
            icon: "movie",
            label: "Videos",
        },
        {
            id: 5,
            icon: "music_note",
            label: "Music",
        },
        {
            id: 6,
            icon: "download",
            label: "Downloads",
        },
        {
            id: 7,
            icon: "computer",
            label: "Desktop",
        },
        {
            id: 8,
            icon: "delete",
            label: "Trash",
        },
    ];
</script>

<FileManager>
    <FileManagerBookmarks>
        {#each datas as data}
            <Bookmark
                bind:current
                id={data.id}
                iconName={data.icon}
                iconSize={32}
                label={data.label}
            />
        {/each}
        {current}
    </FileManagerBookmarks>
</FileManager>
