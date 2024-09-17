import {MenuItemCard} from "@/app/business-listing/MenuItemCard";
import {Section} from "@/app/utils/models/section/section.validator";


type MenuSectionProps = {
    section: Section
}

export async function MenuSection(props: MenuSectionProps) {
    const section = props.section

    // const items = await fetchMenuItemByItemSectionId

    return(
        <>
            <h3 className='text-2xl'>{section.sectionName}</h3>
            <div className='overflow-x-auto flex gap-3'>
                {/*{items.map(item =><MenuItemCard key={item.itemSectionId} item={item} />)}*/}
            </div>
        </>
    )
}