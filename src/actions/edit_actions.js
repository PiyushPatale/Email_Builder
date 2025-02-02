import _ from 'lodash';


export function edit_h1(id, layout_id, position)
{
    return {
        type: "EDIT_H1",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_h1_data(id, data, layout_id, position)
{
    return {
        type: "EDIT_H1_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}


export function edit_h3(id, layout_id, position)
{
    return {
        type: "EDIT_H3",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_h3_data(id, data, layout_id, position)
{
    return {
        type: "EDIT_H3_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}


export function delete_item(id,layout_id,position)
{
    return {
        type: "DELETE",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_hr(id, layout_id, position)
{
    return {
        type: "EDIT_HR",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_p(id, layout_id, position)
{
    return {
        type: "EDIT_P",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_p_data(id, data, layout_id, position)
{
    return {
        type: "EDIT_P_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}


export function edit_img(id, layout_id, position)
{
    return {
        type: "EDIT_IMG",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_img_src(id, src, layout_id, position)
{
    return {
        type: "EDIT_IMG_SRC",
        payload: {
            id,
            src,
            layout_id,
            position
        }
    }
}


export function edit_img_link(id, link, layout_id, position)
{
    return {
        type: "EDIT_IMG_LINK",
        payload: {
            id,
            link,
            layout_id,
            position
        }
    }
}


export function edit_styles(id, styles, layout_id, position)
{
    return {
        type: "EDIT_STYLES",
        payload: {
            id,
            styles,
            layout_id,
            position
        }
    }
}


export function edit_layout_HTML(html, layout_id, position)
{
    return {
        type: 'EDIT_LAYOUT_HTML',
        payload: {
            html,
            layout_id,
            position
        }
    }
}


export function delete_layout(id)
{
    return {
        type: 'DELETE_LAYOUT',
        payload: {
            id
        }
    }
}


export function edit_body_width(width)
{
    return {
        type: "CHANGE_BODY_WIDTH",
        payload: {
            width
        }
    }
}

export function edit_body_background(color)
{
    return {
        type: "CHANGE_BODY_BACKGROUND",
        payload: {
            color
        }
    }
}

export function edit_body_padding(body)
{
    return {
        type: "CHANGE_PADDING",
        payload: body
    }
}


export function edit_layout(id)
{
    return {
        type: "EDIT_LAYOUT",
        payload: {
            id
        }
    }
}


export function edit_layout_styles(id, styles)
{
    return {
        type: "EDIT_LAYOUT_STYLES",
        payload: {
            id,
            styles
        }
    }
}


export function edit_btn(id, layout_id, position)
{
    return {
        type: "EDIT_BTN",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_btn_data(id, data, layout_id, position)
{
    return {
        type: "EDIT_BTN_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}


export function dnd_items(
    drag_id,drop_id,drag_layout_id,drag_position,drop_layout_id,drop_position,movement
)
{
    return {
        type: "DnD_ITEMS",
        payload: {
            drag_id,
            drop_id,
            drag_layout_id,
            drag_position,
            drop_layout_id,
            drop_position,
            movement
        }
    }
}


export function edit_HTML(id, layout_id, position)
{
    return {
        type: "EDIT_HTML",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_HTML_data(id,html,layout_id,position)
{
    return {
        type: "EDIT_HTML_DATA",
        payload: {
            id,
            html,
            layout_id,
            position
        }
    }
}


export function edit_icons(id, layout_id, position)
{
    return {
        type: "EDIT_ICONS",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_icons_data(id,data,layout_id,position)
{
    return {
        type: "EDIT_ICONS_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}


export function duplicate_item(id,layout_id,position)
{
    return {
        type: "DUPLICATE_ITEM",
        payload: {
            id,
            layout_id,
            position,
            new_item_id: _.round(Math.random()*10000000000)
        }
    }
}


export function duplicate_layout(id)
{
    return {
        type: "DUPLICATE_LAYOUT",
        payload: {
            id,
            new_layout_id: _.round(Math.random()*10000000000)
        }
    }
}


export function add_image_to_store(name,url)
{
    return {
        type: "ADD_STORE_IMAGE",
        payload: {
            name,
            url
        }
    }
}


export function delete_image_from_store(id)
{
    return {
        type: "DELETE_STORE_IMAGE",
        payload: {
            id
        }
    }
}


export function image_rotate(id,val,layout_id,position)
{
    return {
        type: "IMAGE_ROTATE",
        payload: {
            id,
            val,
            layout_id,
            position
        }
    }
}


export function assign_template(data)
{
    return {
        type: "ASSIGN_TEMPLATE",
        payload: {
            data
        }
    }
}


export function assign_template_body(body)
{
    return {
        type: "ASSIGN_TEMPLATE_BODY",
        payload: {
            body
        }
    }
}


export function edit_video(id,layout_id,position)
{
    return {
        type: "EDIT_VIDEO",
        payload: {
            id,
            layout_id,
            position
        }
    }
}


export function edit_video_url(id,layout_id,position,data)
{
    return {
        type: "EDIT_VIDEO_URL",
        payload: {
            id,
            layout_id,
            position,
            data
        }
    }
}


