import NavigationBar from "@/components/navigationBar"

// PLS NOTE: to create a new page, create a folder with the title of the page.
// Then create a page.tsx within the folder. 

export default function Page(){
    return (
        <div>
            <NavigationBar />
            <p>visit /home to see homepage - this page should not be used</p>

        </div>
    );
}